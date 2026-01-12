"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pencil, Trash2, Upload, Loader2, Copy } from "lucide-react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [passcode, setPasscode] = useState("")
    const [volunteers, setVolunteers] = useState<any[]>([])
    const [images, setImages] = useState<any[]>([])

    // Volunteer State
    const [editingVolunteer, setEditingVolunteer] = useState<any>(null)
    const [isVolunteerDialogOpen, setIsVolunteerDialogOpen] = useState(false)

    // Gallery State
    const [uploading, setUploading] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [caption, setCaption] = useState("")

    // Login handler
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (passcode === "112233") {
            setIsAuthenticated(true)
            fetchVolunteers()
            fetchImages()
        } else {
            alert("Invalid Passcode")
        }
    }

    // --- Volunteers Logic ---
    const fetchVolunteers = async () => {
        try {
            const res = await fetch("/api/volunteer")
            if (res.ok) {
                const data = await res.json()
                setVolunteers(data || [])
            }
        } catch (error) {
            console.error("Failed to fetch volunteers:", error)
        }
    }

    const handleDeleteVolunteer = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to delete ${name}?`)) return
        try {
            const res = await fetch(`/api/volunteer?id=${id}`, { method: "DELETE" })
            if (res.ok) {
                setVolunteers(volunteers.filter((v) => v.id !== id))
            } else {
                alert("Failed to delete")
            }
        } catch (error) {
            console.error("Error deleting:", error)
        }
    }

    const handleEditVolunteerClick = (volunteer: any) => {
        setEditingVolunteer({ ...volunteer })
        setIsVolunteerDialogOpen(true)
    }

    const handleEditVolunteerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setEditingVolunteer({ ...editingVolunteer, [e.target.name]: e.target.value })
    }

    const handleSaveVolunteer = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch("/api/volunteer", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editingVolunteer),
            })

            if (res.ok) {
                setIsVolunteerDialogOpen(false)
                fetchVolunteers()
            } else {
                alert("Failed to update")
            }
        } catch (error) {
            console.error("Error updating:", error)
        }
    }

    // --- Gallery Logic ---
    const fetchImages = async () => {
        try {
            const res = await fetch("/api/gallery")
            if (res.ok) {
                const data = await res.json()
                setImages(data || [])
            }
        } catch (error) {
            console.error("Failed to fetch images:", error)
        }
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0])
        }
    }

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedFile) return

        setUploading(true)
        try {
            // 1. Upload to Supabase Storage
            const fileExt = selectedFile.name.split(".").pop()
            const fileName = `${Date.now()}.${fileExt}`
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from("Media")
                .upload(fileName, selectedFile)

            if (uploadError) throw uploadError

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from("Media")
                .getPublicUrl(fileName)

            // 3. Save to Database
            const res = await fetch("/api/gallery", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image_url: publicUrl, caption }),
            })

            if (res.ok) {
                alert("Image uploaded successfully!")
                setSelectedFile(null)
                setCaption("")
                fetchImages()
            } else {
                throw new Error("Failed to save to database")
            }
        } catch (error: any) {
            console.error("Upload failed:", error)
            alert(`Upload failed: ${error.message}`)
        } finally {
            setUploading(false)
        }
    }

    const handleDeleteImage = async (id: string, imageUrl: string) => {
        if (!confirm("Are you sure you want to delete this image?")) return

        try {
            // 1. Delete from Storage (Extract filename from URL)
            // URL format: https://.../storage/v1/object/public/gallery/filename.jpg
            const fileName = imageUrl.split("/").pop()
            if (fileName) {
                const { error: storageError } = await supabase.storage
                    .from("Media")
                    .remove([fileName])

                if (storageError) console.error("Storage delete error:", storageError)
            }

            // 2. Delete from Database
            const res = await fetch(`/api/gallery?id=${id}`, { method: "DELETE" })

            if (res.ok) {
                setImages(images.filter(img => img.id !== id))
            } else {
                alert("Failed to delete record")
            }
        } catch (error) {
            console.error("Error deleting image:", error)
        }
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        alert("URL copied to clipboard!")
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <Card className="p-8 w-full max-w-md bg-white shadow-xl">
                    <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Enter Passcode</label>
                            <Input
                                type="password"
                                value={passcode}
                                onChange={(e) => setPasscode(e.target.value)}
                                placeholder="Passcode"
                                className="w-full"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                            Login
                        </Button>
                    </form>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <Button onClick={() => setIsAuthenticated(false)} variant="outline">
                        Logout
                    </Button>
                </div>

                <Tabs defaultValue="volunteers" className="space-y-6">
                    <TabsList className="bg-white p-1 rounded-lg border">
                        <TabsTrigger value="volunteers" className="px-6">Volunteers</TabsTrigger>
                        <TabsTrigger value="gallery" className="px-6">Gallery Manager</TabsTrigger>
                    </TabsList>

                    <TabsContent value="volunteers">
                        <div className="bg-white rounded-xl shadow overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-100 border-b">
                                        <tr>
                                            <th className="p-4 font-semibold text-gray-600">Date</th>
                                            <th className="p-4 font-semibold text-gray-600">Name</th>
                                            <th className="p-4 font-semibold text-gray-600">Email</th>
                                            <th className="p-4 font-semibold text-gray-600">Phone</th>
                                            <th className="p-4 font-semibold text-gray-600">Availability</th>
                                            <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {volunteers.map((volunteer) => (
                                            <tr key={volunteer.id} className="hover:bg-gray-50">
                                                <td className="p-4 text-gray-600" suppressHydrationWarning>
                                                    {volunteer.created_at ? new Date(volunteer.created_at).toLocaleDateString() : 'N/A'}
                                                </td>
                                                <td className="p-4 font-medium text-gray-900">{volunteer.name}</td>
                                                <td className="p-4 text-gray-600">{volunteer.email}</td>
                                                <td className="p-4 text-gray-600">{volunteer.phone}</td>
                                                <td className="p-4 text-gray-600 capitalize">{volunteer.availability}</td>
                                                <td className="p-4 text-right flex justify-end gap-2">
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        onClick={() => handleEditVolunteerClick(volunteer)}
                                                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        onClick={() => handleDeleteVolunteer(volunteer.id, volunteer.name)}
                                                        className="text-red-600 hover:text-red-800 hover:bg-red-50"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                        {volunteers.length === 0 && (
                                            <tr>
                                                <td colSpan={6} className="p-8 text-center text-gray-500">
                                                    No submissions yet.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="gallery">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Upload Card */}
                            <Card className="p-6 md:col-span-1 h-fit">
                                <h3 className="text-xl font-bold mb-4">Upload Image</h3>
                                <form onSubmit={handleUpload} className="space-y-4">
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileSelect}
                                            className="hidden"
                                            id="image-upload"
                                            required
                                        />
                                        <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                                            <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                            <span className="text-sm text-gray-600">
                                                {selectedFile ? selectedFile.name : "Click to select image"}
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-1 block">Caption (Optional)</label>
                                        <Input
                                            value={caption}
                                            onChange={(e) => setCaption(e.target.value)}
                                            placeholder="Enter image caption"
                                        />
                                    </div>
                                    <Button type="submit" disabled={uploading || !selectedFile} className="w-full">
                                        {uploading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Uploading...
                                            </>
                                        ) : (
                                            "Upload to Gallery"
                                        )}
                                    </Button>
                                </form>
                            </Card>

                            {/* Images Grid */}
                            <div className="md:col-span-2 space-y-4">
                                <h3 className="text-xl font-bold">Gallery Images ({images.length})</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {images.map((img) => (
                                        <div key={img.id} className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden border">
                                            <Image
                                                src={img.image_url}
                                                alt={img.caption || "Gallery Image"}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                <Button
                                                    size="icon"
                                                    variant="secondary"
                                                    onClick={() => copyToClipboard(img.image_url)}
                                                    title="Copy URL"
                                                >
                                                    <Copy className="w-4 h-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="destructive"
                                                    onClick={() => handleDeleteImage(img.id, img.image_url)}
                                                    title="Delete Image"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                            {img.caption && (
                                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 truncate">
                                                    {img.caption}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    {images.length === 0 && (
                                        <div className="col-span-full text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed">
                                            No images uploaded yet.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Volunteer Edit Dialog */}
                <Dialog open={isVolunteerDialogOpen} onOpenChange={setIsVolunteerDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Volunteer</DialogTitle>
                        </DialogHeader>
                        {editingVolunteer && (
                            <form onSubmit={handleSaveVolunteer} className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium">Name</label>
                                    <Input
                                        name="name"
                                        value={editingVolunteer.name}
                                        onChange={handleEditVolunteerChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Email</label>
                                    <Input
                                        name="email"
                                        value={editingVolunteer.email}
                                        onChange={handleEditVolunteerChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Phone</label>
                                    <Input
                                        name="phone"
                                        value={editingVolunteer.phone}
                                        onChange={handleEditVolunteerChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Availability</label>
                                    <select
                                        name="availability"
                                        value={editingVolunteer.availability}
                                        onChange={handleEditVolunteerChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                    >
                                        <option value="weekends">Weekends Only</option>
                                        <option value="weekdays">Weekdays Only</option>
                                        <option value="flexible">Flexible</option>
                                    </select>
                                </div>
                                <DialogFooter>
                                    <Button type="button" variant="outline" onClick={() => setIsVolunteerDialogOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                                        Save Changes
                                    </Button>
                                </DialogFooter>
                            </form>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

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
import { Pencil, Trash2 } from "lucide-react"

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [passcode, setPasscode] = useState("")
    const [volunteers, setVolunteers] = useState<any[]>([])
    const [editingVolunteer, setEditingVolunteer] = useState<any>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // Login handler
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (passcode === "112233") {
            setIsAuthenticated(true)
            fetchVolunteers()
        } else {
            alert("Invalid Passcode")
        }
    }

    // Fetch volunteers
    const fetchVolunteers = async () => {
        try {
            const res = await fetch("/api/volunteer")
            if (res.ok) {
                const data = await res.json()
                setVolunteers(data.reverse())
            }
        } catch (error) {
            console.error("Failed to fetch volunteers:", error)
        }
    }

    // Delete volunteer
    const handleDelete = async (id: string, name: string) => {
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

    // Open edit modal
    const handleEditClick = (volunteer: any) => {
        setEditingVolunteer({ ...volunteer })
        setIsDialogOpen(true)
    }

    // Handle edit change
    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setEditingVolunteer({ ...editingVolunteer, [e.target.name]: e.target.value })
    }

    // Save changes
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch("/api/volunteer", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editingVolunteer),
            })

            if (res.ok) {
                setIsDialogOpen(false)
                fetchVolunteers() // Refresh list
            } else {
                alert("Failed to update")
            }
        } catch (error) {
            console.error("Error updating:", error)
        }
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
                    <h1 className="text-3xl font-bold text-gray-900">Volunteer Submissions</h1>
                    <Button onClick={() => setIsAuthenticated(false)} variant="outline">
                        Logout
                    </Button>
                </div>

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
                                        <td className="p-4 text-gray-600">
                                            {new Date(volunteer.submittedAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-4 font-medium text-gray-900">{volunteer.name}</td>
                                        <td className="p-4 text-gray-600">{volunteer.email}</td>
                                        <td className="p-4 text-gray-600">{volunteer.phone}</td>
                                        <td className="p-4 text-gray-600 capitalize">{volunteer.availability}</td>
                                        <td className="p-4 text-right flex justify-end gap-2">
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => handleEditClick(volunteer)}
                                                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => handleDelete(volunteer.id, volunteer.name)}
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

                {/* Edit Dialog */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Volunteer</DialogTitle>
                        </DialogHeader>
                        {editingVolunteer && (
                            <form onSubmit={handleSave} className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium">Name</label>
                                    <Input
                                        name="name"
                                        value={editingVolunteer.name}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Email</label>
                                    <Input
                                        name="email"
                                        value={editingVolunteer.email}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Phone</label>
                                    <Input
                                        name="phone"
                                        value={editingVolunteer.phone}
                                        onChange={handleEditChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Availability</label>
                                    <select
                                        name="availability"
                                        value={editingVolunteer.availability}
                                        onChange={handleEditChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                    >
                                        <option value="weekends">Weekends Only</option>
                                        <option value="weekdays">Weekdays Only</option>
                                        <option value="flexible">Flexible</option>
                                    </select>
                                </div>
                                <DialogFooter>
                                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
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

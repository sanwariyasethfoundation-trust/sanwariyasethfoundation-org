import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
    try {
        const { data, error } = await supabase
            .from("gallery_images")
            .select("*")
            .order("created_at", { ascending: false })

        if (error) throw error

        return NextResponse.json(data)
    } catch (error) {
        console.error("Error fetching images:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { image_url, caption } = body

        if (!image_url) {
            return NextResponse.json({ error: "Missing image URL" }, { status: 400 })
        }

        const { data, error } = await supabase
            .from("gallery_images")
            .insert([{ image_url, caption }])
            .select()

        if (error) throw error

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error("Error saving image:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const id = searchParams.get("id")

        if (!id) {
            return NextResponse.json({ error: "Missing ID" }, { status: 400 })
        }

        const { error } = await supabase.from("gallery_images").delete().eq("id", id)

        if (error) throw error

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error deleting image:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, phone, availability } = body

        if (!name || !email || !phone) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const { data, error } = await supabase
            .from("volunteers")
            .insert([{ name, email, phone, availability }])
            .select()

        if (error) {
            if (error.code === "23505") {
                return NextResponse.json({ error: "Phone number already registered" }, { status: 409 })
            }
            throw error
        }

        return NextResponse.json({ success: true, message: "Volunteer registered successfully", data })
    } catch (error) {
        console.error("Error saving volunteer:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

export async function GET() {
    try {
        const { data, error } = await supabase
            .from("volunteers")
            .select("*")
            .order("created_at", { ascending: false })

        if (error) throw error

        return NextResponse.json(data)
    } catch (error) {
        console.error("Error reading volunteers:", error)
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

        const { error } = await supabase.from("volunteers").delete().eq("id", id)

        if (error) throw error

        return NextResponse.json({ success: true, message: "Volunteer deleted" })
    } catch (error) {
        console.error("Error deleting volunteer:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json()
        const { id, name, email, phone, availability } = body

        if (!id) {
            return NextResponse.json({ error: "Missing ID" }, { status: 400 })
        }

        const { error } = await supabase
            .from("volunteers")
            .update({ name, email, phone, availability })
            .eq("id", id)

        if (error) throw error

        return NextResponse.json({ success: true, message: "Volunteer updated" })
    } catch (error) {
        console.error("Error updating volunteer:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

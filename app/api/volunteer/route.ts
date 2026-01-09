import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const DATA_FILE = path.join(DATA_DIR, "volunteers.json")

// Ensure data directory and file exist
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
}

if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]))
}

const getVolunteers = () => {
    const fileData = fs.readFileSync(DATA_FILE, "utf-8")
    return JSON.parse(fileData)
}

const saveVolunteers = (volunteers: any[]) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(volunteers, null, 2))
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, phone, availability } = body

        if (!name || !email || !phone) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        if (process.env.NODE_ENV === 'production') {
            // In production (e.g., Vercel), we can't write to the filesystem.
            // Log the data for now, or connect to a database in the future.
            console.log("Volunteer Registration (Production):", { name, email, phone, availability })
            return NextResponse.json({ success: true, message: "Volunteer registered successfully received (Production Mode)" })
        }

        const volunteers = getVolunteers()
        const duplicate = volunteers.find((v: any) => v.phone === phone)

        if (duplicate) {
            return NextResponse.json({ error: "Phone number already registered" }, { status: 409 })
        }

        const newVolunteer = {
            id: Date.now().toString(),
            name,
            email,
            phone,
            availability,
            submittedAt: new Date().toISOString(),
        }

        volunteers.push(newVolunteer)
        saveVolunteers(volunteers)

        return NextResponse.json({ success: true, message: "Volunteer registered successfully" })
    } catch (error) {
        console.error("Error saving volunteer:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

export async function GET() {
    try {
        const volunteers = getVolunteers()
        return NextResponse.json(volunteers)
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

        let volunteers = getVolunteers()
        volunteers = volunteers.filter((v: any) => v.id !== id)
        saveVolunteers(volunteers)

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

        let volunteers = getVolunteers()
        const index = volunteers.findIndex((v: any) => v.id === id)

        if (index === -1) {
            return NextResponse.json({ error: "Volunteer not found" }, { status: 404 })
        }

        volunteers[index] = { ...volunteers[index], name, email, phone, availability }
        saveVolunteers(volunteers)

        return NextResponse.json({ success: true, message: "Volunteer updated" })
    } catch (error) {
        console.error("Error updating volunteer:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

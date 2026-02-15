import { NextResponse } from "next/server"
import { PhotoService } from "@/services/photo.service"

export async function GET() {
  try {
    const photos = await PhotoService.getAll()
    return NextResponse.json(photos)
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch photos" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const newPhoto = await PhotoService.create(body)

    return NextResponse.json(newPhoto, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create photo" },
      { status: 500 }
    )
  }
}

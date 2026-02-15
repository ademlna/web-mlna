import { NextResponse } from "next/server"
import { PhotoService } from "@/services/photo.service"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const photo = await PhotoService.getById(id)

    if (!photo) {
      return NextResponse.json(
        { message: "Photo not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(photo)
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch photo" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    const updated = await PhotoService.update(id, body)

    return NextResponse.json(updated)
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update photo" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await PhotoService.delete(id)

    return NextResponse.json({ message: "Deleted successfully" })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete photo" },
      { status: 500 }
    )
  }
}

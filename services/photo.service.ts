import { prisma } from "@/lib/prisma"

export class PhotoService {

  static async getAll() {
    return prisma.photo.findMany({
      orderBy: { created_at: "desc" },
      include: { account: true }
    })
  }

  static async getById(id: string) {
    return prisma.photo.findUnique({
      where: { photo_id: id },
      include: { account: true }
    })
  }

  static async create(data: {
    caption: string
    filename: string
    location?: string
    account_id: string
  }) {
    return prisma.photo.create({
      data: {
        caption: data.caption,
        filename: data.filename,
        location: data.location,
        account: {
          connect: { account_id: data.account_id }
        }
      }
    })
  }

  static async update(id: string, data: any) {
    return prisma.photo.update({
      where: { photo_id: id },
      data
    })
  }

  static async delete(id: string) {
    return prisma.photo.delete({
      where: { photo_id: id }
    })
  }
}

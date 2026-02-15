export interface Account {
  account_id: string
  username: string
  email: string
}

export interface Photo {
  photo_id: string
  caption: string
  filename: string
  location?: string
  created_at: string
  account: Account
}

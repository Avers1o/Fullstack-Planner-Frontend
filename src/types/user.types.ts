export interface IUser {
	id: number
	name?: string
	email: string

	workInterval?: number
	breakInterval?: number
	intervalsCount?: number
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }

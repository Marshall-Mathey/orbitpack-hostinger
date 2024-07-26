import vine from '@vinejs/vine';
const password = vine.string().minLength(6);
export const registerValidator = vine.compile(vine.object({
    pseudo: vine.string().unique(async (db, value) => {
        const match = await db.from('users').select('id').where('pseudo', value).first();
        return !match;
    }),
    password,
    isAdmin: vine.boolean().optional(),
    createdBy: vine.number().positive().optional(),
}));
export const loginValidator = vine.compile(vine.object({
    pseudo: vine.string(),
    password,
}));
//# sourceMappingURL=auth.js.map
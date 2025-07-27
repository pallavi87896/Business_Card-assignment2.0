const zod=require ("zod");
const createCard=zod.object({
    name:zod.string(),
    description:zod.string(),
    interests:zod.array(zod.string()),
    linkedIn:zod.string(),
    github:zod.string()
})
module.exports={
    createCard:createCard
}
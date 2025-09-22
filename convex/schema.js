import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        tokenIdentifier: v.string(),
        imageUrl: v.optional(v.string()),

        plan:v.union(v.literal("free"),v.literal("pro")),

        //usage tracking for plan limit
        projectsUsed: v.number(),
        exportsThisMonth: v.number(),

        createdAt: v.number(),
        updatedAt: v.number(),
    }).index("by_token", ["tokenIdentifier"])
})
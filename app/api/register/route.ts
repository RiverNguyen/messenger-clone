import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { email, name, password } = body;

        if (!email || !password || !name) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal server error", { status: 400 });
    }
};

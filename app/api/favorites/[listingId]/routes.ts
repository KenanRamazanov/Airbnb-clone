import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
}


export async function POST(
    requwst: Request,
    {params}: {params: IParams}
    ) {
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            return NextResponse.error();
        }
    }

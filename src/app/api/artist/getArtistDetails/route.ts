import { connect } from '@/dbConfig/dbConfig';
import Artist from '@/models/Artists';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    await connect();

    try {

        const artistId = request.nextUrl.searchParams.get("artistId");


        if (!artistId) {
            return NextResponse.json({ status: 400, message: "Artist ID is missing", success: false });
        }

        const artistData = await Artist.find({ _id: artistId });
        
        return NextResponse.json({
            message: "Artist found",
            success: true,
            status: 200,
            data: artistData
        });

    } catch (error: any) {
        return NextResponse.json({ status: 500, message: error.message, success: false });
    }
}

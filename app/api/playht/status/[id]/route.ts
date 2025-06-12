import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const transcriptionId = params.id;

        const response = await fetch(
            `https://api.play.ht/api/v2/tts/${transcriptionId}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.PLAYHT_SECRET_KEY}`,
                    "X-USER-ID": process.env.PLAYHT_USER_ID!,
                },
            }
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to check PlayHT status" },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("PlayHT Status Check Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

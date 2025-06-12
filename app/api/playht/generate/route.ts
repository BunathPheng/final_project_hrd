import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { text, voice = "larry", speed = 1 } = await request.json();

        if (!text) {
            return NextResponse.json(
                { error: "Text is required" },
                { status: 400 }
            );
        }

        if (text.length > 5000) {
            return NextResponse.json(
                { error: "Text too long (max 5000 characters)" },
                { status: 400 }
            );
        }

        const response = await fetch("https://api.play.ht/api/v2/tts", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.PLAYHT_SECRET_KEY}`,
                "X-USER-ID": process.env.PLAYHT_USER_ID!,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                voice,
                output_format: "mp3",
                speed,
                sample_rate: 44100,
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error("PlayHT API Error:", errorData);
            return NextResponse.json(
                { error: "Failed to generate speech with PlayHT" },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("PlayHT Generation Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

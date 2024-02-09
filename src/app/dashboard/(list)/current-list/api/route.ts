import {NextRequest} from "next/server";

export async function GET() : Promise<Response>{
    const data = {
        code : 200,
        message : "OK",
        lists : [
            {
                id : 1,
                title : "one",
                level : 1,
            },
            {
                id : 2,
                title : "two",
                level : 2,
            }
        ]
    }
    return Response.json(data);
}
export async function POST(request : NextRequest): Promise<Response> {
    const data = {
        code : 201,
        message : "POST OK"
    }
    return Response.json(data);
}
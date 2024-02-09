import {NextRequest} from "next/server";

export async function GET(request : NextRequest) {

    // 테스팅 코드. /login 에서 GET을 쓸 일은 없음.
    /*const testData = {
        code : 200,
        message : "OK in GET Method"
    }
    return Response.json(testData);*/
}
export async function POST(request : NextRequest) {
    const data = await request.json();

    if(data.id === process.env.USER_ID && data.password === process.env.USER_PASSWORD){
        return Response.json(
            {
                code : 201,
                message : "OK in POST Method",

            }
        )

    } else {
        return Response.json(
            {
                code : 401,
                message : "NOT OK in POST Method",

            }
        )
    }
}
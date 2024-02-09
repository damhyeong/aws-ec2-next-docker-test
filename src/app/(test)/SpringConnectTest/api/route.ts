
export async function GET(){
    const data = await fetch("http://localhost:8080/test")
        .then((response) => response.json())
        .then(data => {return Response.json(data)});
}
export async function POST() {
    try {
        const response = await fetch("http://localhost:8080/test", {
            method: "POST"
        });
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200, // 적절한 HTTP 상태 코드 설정
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error : any) {
        // 오류 처리
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
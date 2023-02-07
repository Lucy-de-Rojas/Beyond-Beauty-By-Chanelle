

export async function reinstateMessage(event) {


    const messageID = event.target.id;
    console.log('message ID:>>>', event.target.id);

    let response = await fetch(`/api/archive-messages/${messageID}`);








}




export async function archiveMessage(event) {


    const messageID = event.target.id;
    console.log('message ID:>>>', event.target.id);

    let response = await fetch(`/api/messages-archive/${messageID}`);







}

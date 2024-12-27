import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const text = `مدونة سداد %0A ${des}`;
        await axios.post(`https://api.telegram.org/bot${process.env.TOKEN/sendMessage?chat_id=process.enc.CHAT_ID&text=${text}`)
    }
  return {
    Send,
}
}

export default TeleSned;

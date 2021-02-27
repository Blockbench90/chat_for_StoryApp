import { notification } from 'antd';

interface notificationProps {
    text: string
    type: 'info' | 'error'
    title: string
    duration: number
}


//всплывающие уведомления
const openNotification = ({ text, type = 'info', title, duration = 3 }: notificationProps) =>
  notification[type]({
    message: title,
    description: text,
    duration,
  });
export default openNotification

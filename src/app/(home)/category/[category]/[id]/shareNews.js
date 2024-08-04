'use client'
// في ملف الصفحة الخاص بالخبر (مثل pages/news/[slug].js)

import { FacebookShareButton, InstapaperIcon, InstapaperShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share';

const NewsPage = ({ news }) => {
  const shareUrl = news.url;
  const title = news.title;

  return (
    <div>
      <div className='flex gap-3 items-center'>
        <p>مشاركه :</p>
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round/>
        </WhatsappShareButton>

        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={32} className='rounded-full'/>
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default NewsPage;

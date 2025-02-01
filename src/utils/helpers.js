import * as cheerio from 'cheerio';

export function truncateString(str, num = 10) {
  const words = str.split(' ');

  if (words.length <= num) {
    return str;
  }

  return words.slice(0, num).join(' ') + '...';
}

export function isEven(num) {
  return num % 2 === 0;
}

export function getEmbedLink(youtubeUrl) {
  try {
    // Parse the URL
    const url = new URL(youtubeUrl);

    // Check if the URL is a valid YouTube URL
    if (
      !['www.youtube.com', 'youtube.com', 'youtu.be'].includes(url.hostname)
    ) {
      throw new Error('Invalid YouTube URL');
    }

    let videoId;

    if (url.hostname === 'youtu.be') {
      // Handle short links like https://youtu.be/dQw4w9WgXcQ
      videoId = url.pathname.slice(1); // Remove the leading '/'
    } else {
      // Handle standard links like https://www.youtube.com/watch?v=dQw4w9WgXcQ
      videoId = url.searchParams.get('v');
    }

    if (!videoId) {
      throw new Error('No video ID found in the URL');
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

export const getThumbnailUrl = (youtubeUrl) => {
  try {
    const url = new URL(youtubeUrl);
    let videoId;

    if (url.hostname === 'youtu.be') {
      videoId = url.pathname.slice(1);
    } else {
      videoId = url.searchParams.get('v');
    }

    if (!videoId) throw new Error('Invalid YouTube URL');
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // High-quality thumbnail
  } catch (error) {
    console.error('Error generating thumbnail URL:', error);
    return null;
  }
};

export const getImage = (content) => {
  const imgSrc =
    cheerio
      .load(content || '')('img')
      .first()
      .attr('src') || '/no-img.jpg';

  return imgSrc;
};

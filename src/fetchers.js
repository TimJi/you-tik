import { stringify } from 'query-string'

export const listFetcher = (url) => {
  if (url === '/following_list') {
    return Promise.resolve(stringify([
      {
        'title': 'Audi_A4_S4',
        'cover': '/images/Audi_A4_S4.png',
        'play_url': '/media/Audi_A4_S4.m3u8'
      },
      {
        'title': 'Bugatti_Chiron',
        'cover': '/images/Bugatti_Chiron.png',
        'play_url': '/media/Bugatti_Chiron.m3u8'
      },
      {
        'title': 'Range_Rover_Sport_L322',
        'cover': '/images/Range_Rover_Sport_L322.png',
        'play_url': '/media/Range_Rover_Sport_L322.m3u8'
      }
    ]));

  } else if (url === '/for_you_list') {
    return Promise.resolve(stringify([
      {
        'title': 'Rolls_Royce_Ghost',
        'cover': '/images/Rolls_Royce_Ghost.png',
        'play_url': '/media/Rolls_Royce_Ghost.m3u8'
      },
      {
        'title': 'Toyota_Camry_XV70',
        'cover': '/images/Toyota_Camry_XV70.png',
        'play_url': '/media/Toyota_Camry_XV70.m3u8'
      },
      {
        'title': 'Volkswagen_Golf_7',
        'cover': '/images/Volkswagen_Golf_7.png',
        'play_url': '/media/Volkswagen_Golf_7.m3u8'
      }
    ]));
  }
  return Promise.reject(new Error('Cannot GET ' + url));
}

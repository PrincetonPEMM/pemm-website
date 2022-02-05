import type { NextApiRequest, NextApiResponse } from 'next'
import type {Images} from '../../../components/types/images';

const IMAGES = [
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00004e/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00004f/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x000074/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00007b/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x000084/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000027/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000028/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000046/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x00004d/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000054/full/400,/0/default.jpg",
    "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x0000e6/full/400,/0/default.jpg",
    "https://iiif-cloud.princeton.edu/iiif/2/99%2F5b%2Fcc%2F995bcc2069dc451298f11bd8448be628%2Fintermediate_file/full/400,/0/default.jpg",
    "https://iiif-cloud.princeton.edu/iiif/2/d9%2F19%2F40%2Fd91940a0919e43c98a5fe14f27ae0866%2Fintermediate_file/full/400,/0/default.jpg"
  ];

function getAllImageUris() {
    return IMAGES;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Images>
) {
  res.status(200).json({ imageUris: getAllImageUris() })
}

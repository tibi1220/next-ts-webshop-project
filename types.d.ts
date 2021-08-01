export declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }

  interface Review {
    id?: number;
    name?: string;
    stars: number;
    review?: string;
  }

  interface Item {
    id: name;
    imageId: number;
    name: string;
    seller: string;
    price: number;
    description: string;
    reviews: Array<Review>;
    _avg?: {
      stars: number;
    };
  }
}

// ReadingTracker.ts
type Book = {
  book: string;
  author: string;
  genre: string;
}

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.progressNotification(
        "Congratulations! You've reached your reading goal!"
      );
      return;
    }
    this.progressNotification(
      "There are still some books to go!"
    );
  }

  progressNotification(message: string): void {
    console.log(message);
  }
}

class BookWishList {
  private _wishList: Book[];

  constructor(wishList: Book[]) {
    this._wishList = wishList;
  }

  addToWishList(book: Book): void {
    this._wishList.push(book);
  }

  showWishlist(): void {
    console.log(this._wishList);
  }
}

const wishList: Book[] = [
  {
    author: 'J.R.R. Tolkien',
    book: 'Senhor dos anéis',
    genre: 'Fantasia'
  },
  {
    author: 'J.K. Rowling',
    book: 'Harry Potter',
    genre: 'Fantasia',
  }
]

const readTracker = new ReadingTracker(3);
const booksWishList = new BookWishList(wishList);

booksWishList.showWishlist();

readTracker.trackReadings(2);
readTracker.trackReadings(1);

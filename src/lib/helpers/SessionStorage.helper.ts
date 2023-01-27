export class SessionStorageWorker {
  setItem(key: string, item: any) {
    sessionStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): any {
    let parsedItem = '';
    const item = sessionStorage.getItem(key) || '';

    try {
      parsedItem = JSON.parse(item);
    } catch {
      parsedItem = '';
    }

    return parsedItem;
  }

  removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
}

export default new SessionStorageWorker();

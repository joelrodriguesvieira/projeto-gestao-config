import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

  list(search: string) {
    return Array.from(this.#videos.entries())
      .map(([id, video]) => ({
        id,
        ...video,
      }))
      .filter((video) => !search || video.title.includes(search));
  }

  create(video: { title: string; description: string; duration: number }) {
    const id = randomUUID();
    this.#videos.set(id, video);
    return id;
  }
}

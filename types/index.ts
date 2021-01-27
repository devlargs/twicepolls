export type PollsProps = {
  imageCoverUrl: string;
  question: string;
  slug: string;
  dateCreated: string;
  dateUpdated: string;
  type: "members" | "custom" | "songs";
  approved: boolean;
  id: string;
};

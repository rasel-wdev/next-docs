import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-utils";

import ContentDisplay from "@/components/ContentDisplay";

export default function TagPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;

  return <div>{name}</div>;
}

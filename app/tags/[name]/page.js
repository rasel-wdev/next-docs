import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-utils";

export default function TagPage({ params: { name } }) {
  console.log("tag name", name);
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);
  console.log(docs);
  console.log("Tag name", name);
  console.log("Tag matches", matchedDocuments);

  return <ContentDisplay id={matchedDocuments[0].id} />;

  return <div>{name}</div>;
}

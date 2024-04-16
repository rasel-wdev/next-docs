import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-utils";

export default function AuthorPage({ params: { name } }) {
  console.log("Author page", name);
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByAuthor(docs, name);
  console.log(matchedDocuments);

  return <ContentDisplay id={matchedDocuments[0].id} />;
}

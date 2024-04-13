import ContentDisplay from "@/components/ContentDisplay";
export default function SubContentId({ params: { subContentId } }) {
  return (
    <div>
      <ContentDisplay id={subContentId} />
    </div>
  );
}

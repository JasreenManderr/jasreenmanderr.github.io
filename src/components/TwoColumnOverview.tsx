export default function TwoColumnOverview({
  headerText,
  roleText,
  teamText,
  durationText,
  platformText,
  bodyText,
}: {
  headerText: string;
  bodyText: string;
  roleText: string;
  teamText: string;
  durationText: string;
  platformText: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-12 md:gap-48 md:grid-cols-2 max-w-screen">
      <div>
        <h3 className="text-xl font-semibold">{headerText}</h3>
        <br />
        <p className="text-base">{bodyText}</p>
      </div>
      <div className="mx-2 text-left md:text-right">
        <div className="flex justify-between md:justify-start md:gap-4 items-center mb-2">
          <span className="font-bold">Role:</span>
          <span className="font-normal">{roleText}</span>
        </div>
        <div className="flex justify-between md:justify-start md:gap-4 items-center mb-2">
          <span className="font-bold">Team:</span>
          <span className="font-normal">{teamText}</span>
        </div>
        <div className="flex justify-between md:justify-start md:gap-4 items-center mb-2">
          <span className="font-bold">Duration:</span>
          <span className="font-normal">{durationText}</span>
        </div>
        <div className="flex justify-between md:justify-start md:gap-4 items-center">
          <span className="font-bold">Platform:</span>
          <span className="font-normal">{platformText}</span>
        </div>
      </div>
    </div>
  );
}

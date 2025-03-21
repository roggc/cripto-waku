import { Skeleton } from "@progress/kendo-react-indicators";
import { Push } from "@progress/kendo-react-animation";
import { Card, CardBody } from "@progress/kendo-react-layout";

export default function SkeletonCard() {
  return (
    <Push className="w-full">
      <Card>
        <CardBody>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center justify-between gap-4 w-full">
              <Skeleton shape="text" className="w-full" />
              <Skeleton shape="circle" style={{ width: 50, height: 50 }} />
            </div>
            <div className="flex items-center justify-between gap-4 w-full">
              <Skeleton shape="text" className="w-full" />
              <Skeleton shape="text" className="w-full" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Push>
  );
}

import { Map, MapControls } from "@/components/ui/map";
import { Card } from "@/components/ui/card";

const LocationMap = () => {
  return (
    <div className="mt-4">
      <Card className="h-[300px] p-0 overflow-hidden">
        <Map center={[73.1812, 22.3072]} zoom={12}>
          <MapControls />
        </Map>
      </Card>
    </div>
  );
};

export default LocationMap;

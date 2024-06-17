import MainLayout from "@/components/layouts/MainLayout";
import Cart from "@/components/fragments/display/dashboard/Cart";
import Card from "@/components/ui/display/Card";

const DashboardUser = () => {
  return (
    <>
      <MainLayout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex w-full gap-8 overflow-auto whitespace-nowrap">
              <p>Semua</p>
              <p>Material Bangunan</p>
              <p>Alat Bangunan</p>
              <p>Peralatan Listrik</p>
              <p>Pintu dan Jendela</p>
              <p>Lantai dan Dinding</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Card
                media
                onClick
                mediaType="circle"
                children={
                  <>
                    <p className="font-bold">Semen Portland</p>
                    <div className="flex items-end justify-between">
                      <div className="extra-small">Per Sak</div>
                      <div className="small font-medium">Rp. 50.000</div>
                    </div>
                  </>
                }
              />
            </div>
          </div>

          <div className="col-span-1">
            <Cart />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default DashboardUser;

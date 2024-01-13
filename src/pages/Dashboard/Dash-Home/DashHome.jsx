
import { CardSubtitle, Col, Row } from "reactstrap";
import useAllNews from "../../../hooks/useAllNews";
import useToolsCategories from "../../../hooks/useToolsCategories";
import useVisitors from "../../../hooks/useVisitors";

export default function DashHome() {
  const [allNews, ,] = useAllNews()
  const { toolsCategories, } = useToolsCategories()

  const visitorCount = useVisitors()
  // console.log(visitorCount);
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0"></h1>
          </div>

        </div>
        <div className="container-fluid">
          <CardSubtitle className="text-muted" tag="h6">
            Report
          </CardSubtitle>
          <div className="bg-primary text-white my-3 p-3 rounded">
            <Row>
              <Col md="4">
                <h6>Total Visitors</h6>
                <h4 className="mb-0 fw-bold">
                  {visitorCount}
                </h4>
              </Col>
              <Col md="4">
                <h6>Total Blogs</h6>
                <h4 className="mb-0 fw-bold">{allNews?.length || 0}</h4>
              </Col>
              <Col md="4">
                <h6>Total Tool Categories </h6>
                <h4 className="mb-0 fw-bold">{toolsCategories?.length || 0}</h4>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>100</h3>
                  <p>unique Student</p>
                </div>
                <div className="icon">
                  <i className=" fas fa-user-plus" />
                </div>

              </div>
            </div>
            <div className="col-lg-3">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>100</h3>
                  <p>Total sells</p>
                </div>
                <div className="icon">
                  <i className="fas fa-shopping-cart" />
                </div>

              </div>
            </div>
            <div className="col-lg-3">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>100</h3>
                  <p>All Users</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users" />
                </div>

              </div>
            </div>
            <div className="col-lg-3">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>Loading . . .</h3>
                  <p>Today Sell </p>
                </div>
                <div className="icon">
                  <i className="fas fa-calendar " />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-header row">
        {/* sm="6" lg="6" xl="7" xxl="8 */}
        <div>
          {/* <SalesChart /> */}
        </div>
      </div>
    </div>
  );
}

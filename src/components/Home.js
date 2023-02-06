import { Link } from "react-router-dom";
import "../CSS/home.css";

const Home = () => {
  return (
    <div className="head">
      <h2>Predictor League</h2>
      <div className="table">
        <table>
          <tr>
            <th>Posistion</th>
            <th>Name</th>
            <th>Points</th>
            <th>Posistion Change</th>
            <th>Posistions Correct</th>
          </tr>
          <tr className="first">
            <td>1.</td>
            <td>
              <Link to="/Paula">Paula Bridge</Link>
            </td>
            <td>72</td>
            <td>+1</td>
            <td>2</td>
          </tr>
          <tr className="second">
            <td>2.</td>
            <td>
              <Link to="/Adam">Adam Wilkinson</Link>
            </td>
            <td>74</td>
            <td>-1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>
              <Link to="/Steve">Steve Lee</Link>
            </td>
            <td>74</td>
            <td>0</td>
            <td>2</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>
              <Link to="/Beth">Beth Springer</Link>
            </td>
            <td>78</td>
            <td>+2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>
              <Link to="/Wilko">Wilko</Link>
            </td>
            <td>78</td>
            <td>-1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>
              <Link to="/JoeG">Joe Godfrey</Link>
            </td>
            <td>78</td>
            <td>+1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>
              <Link to="/Springer">Tim Springer</Link>
            </td>
            <td>78</td>
            <td>-2</td>
            <td>0</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>
              <Link to="/George">George Springer</Link>
            </td>
            <td>82</td>
            <td>+2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>
              <Link to="/Paul">Paul Gunning</Link>
            </td>
            <td>82</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>10.</td>
            <td>
              <Link to="/Bennett">Mike Bennett</Link>
            </td>
            <td>84</td>
            <td>+1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11.</td>
            <td>
              <Link to="/Jason">Jason</Link>
            </td>
            <td>84</td>
            <td>-3</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12.</td>
            <td>
              <Link to="/JohnB">John Bellairs</Link>
            </td>
            <td>84</td>
            <td>+4</td>
            <td>0</td>
          </tr>
          <tr>
            <td>13.</td>
            <td>
              <Link to="/Sam">Sam Hazeldine</Link>
            </td>
            <td>84</td>
            <td>-1</td>
            <td>0</td>
          </tr>
          <tr className="bogey">
            <td>14.</td>
            <td>
              <Link to="/Al">Al Markham</Link>
            </td>
            <td>86</td>
            <td>+4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>15.</td>
            <td>
              <Link to="/Tony">Tony</Link>
            </td>
            <td>86</td>
            <td>-1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>16.</td>
            <td>
              <Link to="/Billy">Billy Sullivan</Link>
            </td>
            <td>86</td>
            <td>+3</td>
            <td>2</td>
          </tr>
          <tr>
            <td>17.</td>
            <td>
              <Link to="/DaveT">Dave Tracy</Link>
            </td>
            <td>86</td>
            <td>-4</td>
            <td>1</td>
          </tr>
          <tr>
            <td>18.</td>
            <td>
              <Link to="/Nick">Nick Cook</Link>
            </td>
            <td>86</td>
            <td>-3</td>
            <td>1</td>
          </tr>
          <tr>
            <td>19.</td>
            <td>
              <Link to="/Sullivan">Tim Sullivan</Link>
            </td>
            <td>86</td>
            <td>+2</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20.</td>
            <td>
              <Link to="/DaveM">Dave Moody</Link>
            </td>
            <td>88</td>
            <td>+2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>21.</td>
            <td>
              <Link to="/Rick">Rick</Link>
            </td>
            <td>88</td>
            <td>-1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>22.</td>
            <td>
              <Link to="/Scott">Scott</Link>
            </td>
            <td>90</td>
            <td>-5</td>
            <td>4</td>
          </tr>
          <tr>
            <td>23.</td>
            <td>
              <Link to="/DaveH">Dave Healy</Link>
            </td>
            <td>90</td>
            <td>+3</td>
            <td>2</td>
          </tr>
          <tr>
            <td>24.</td>
            <td>
              <Link to="/EvertonDave">Everton Dave</Link>
            </td>
            <td>90</td>
            <td>-1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>25.</td>
            <td>
              <Link to="/Joe">Joe Gunning</Link>
            </td>
            <td>92</td>
            <td>-1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>26.</td>
            <td>
              <Link to="/Roy">Roy</Link>
            </td>
            <td>92</td>
            <td>-1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>27.</td>
            <td>
              <Link to="/Chris">Chris Markham</Link>
            </td>
            <td>94</td>
            <td>+1</td>
            <td>1</td>
          </tr>
          <tr className="last">
            <td>28.</td>
            <td>
              <Link to="/Lewis">Lewis Markham</Link>
            </td>
            <td>96</td>
            <td>-1</td>
            <td>3</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;

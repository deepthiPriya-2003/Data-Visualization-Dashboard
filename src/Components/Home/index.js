import {Component} from 'react'; 
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 },
    { name: 'Mar', sales: 2000, revenue: 9800 },
    { name: 'Apr', sales: 2780, revenue: 3908 },
    { name: 'May', sales: 1890, revenue: 4800 },
  ];

const pieData = [
    { name: 'Product A', value: 400 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 300 },
    { name: 'Product D', value: 200 },
  ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class Home extends Component{
   state = {
      theme: "light"
    };
     toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    });
  };


    
    render(){
      const {theme}=this.state 
      const appStyle = {
      backgroundColor: theme === "light" ? "#f5f5f5" : "#121212",
      color: theme === "light" ? "#000" : "#fff",
      minHeight: "100vh",
      padding: "20px",
      transition: "all 0.3s ease"
    };

    const buttonStyle = {
      padding: "10px 20px",
      marginBottom: "20px",
      cursor: "pointer"
    };
        return(
          <div style={appStyle}>
        <button onClick={this.toggleTheme} style={buttonStyle} className="btn btn-primary">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
          <h1 className="text-center mb-5">Data Visualization Dashboard</h1>
         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center' }}>
            <div>
        <h3>Sales Bar Chart</h3>
        <ResponsiveContainer width={400} height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      
      <div>
        <h3>Revenue Line Chart</h3>
        <ResponsiveContainer width={400} height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
      <div>
        <h3>Product Distribution</h3>
        <ResponsiveContainer width={400} height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
   </div>
  );


};
}





export default Home
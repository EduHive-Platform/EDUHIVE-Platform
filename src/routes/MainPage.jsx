/* 
  Route: /main
  Created: 2024-06-24
  Last Modified: 2024-06-24
  Author: Zihan Zhao
*/

const MainPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        const userData = {
          email,
          password
        };
    
        try {
          const response = await axios.post('http://localhost:3000/login', userData);
          console.log(response.data);
          /* Redirect or update UI based on the response 
             TODO
          */
          alert("Login successfully!");
        } catch (error) {
          console.error('There was an error Login!', error);
        }
      };
    
    return (
        <OuterContainer>
          <Logo src="/assets/Logo.png" alt="EduHive Logo" /> {/* Ensure the correct path to your image */}
          <Container>
            <FormContainer>
              <Title>Login by typing your email and password</Title>
              <Row>
                <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Row>
              <Row>
                <Input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <SmallButton onClick={handleLogin}>Login</SmallButton>
              </Row>
            </FormContainer>
            <Image src="/assets/Hive.png" alt="Verification" />
          </Container>
        </OuterContainer>
      );
};

export default MainPage;
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Divider, message } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onFinish = async (_values: LoginFormData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      message.success('Login successful!');
      navigate('/');
    } catch (error) {
      message.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    message.info(`${provider} login coming soon!`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Professional Financial Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>

      {/* Financial Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Stock Chart Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* CSS Stock Chart Lines */}
        <svg className="absolute top-20 left-20 w-64 h-32 opacity-10" viewBox="0 0 200 80">
          <polyline
            fill="none"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
            points="0,60 20,45 40,50 60,30 80,35 100,20 120,25 140,15 160,20 180,10 200,15"
            className="animate-pulse"
          />
        </svg>

        <svg className="absolute bottom-32 right-24 w-48 h-24 opacity-8" viewBox="0 0 150 60">
          <polyline
            fill="none"
            stroke="rgb(34, 197, 94)"
            strokeWidth="2"
            points="0,50 15,40 30,45 45,25 60,30 75,15 90,20 105,10 120,15 135,5 150,10"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>

        {/* Financial Data Cards */}
        <div className="absolute top-1/4 right-16 bg-white/5 backdrop-blur-sm border border-blue-200/20 rounded-lg p-3 shadow-lg animate-gentleFloat" style={{ animationDelay: '2s' }}>
          <div className="text-blue-600/40 text-xs font-mono">NIFTY 50</div>
          <div className="text-green-600/50 text-sm font-bold">+1.24%</div>
        </div>

        <div className="absolute bottom-1/3 left-20 bg-white/5 backdrop-blur-sm border border-indigo-200/20 rounded-lg p-3 shadow-lg animate-gentleFloat" style={{ animationDelay: '4s' }}>
          <div className="text-indigo-600/40 text-xs font-mono">BANKNIFTY</div>
          <div className="text-green-600/50 text-sm font-bold">+2.87%</div>
        </div>

        {/* Candlestick Chart Elements */}
        <div className="absolute top-1/2 left-1/3 flex space-x-1 opacity-10">
          <div className="w-1 h-8 bg-green-500 rounded-sm animate-pulse"></div>
          <div className="w-1 h-6 bg-red-500 rounded-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-1 h-10 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="w-1 h-4 bg-red-500 rounded-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="w-1 h-7 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Subtle Background Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-indigo-400/5 rounded-full blur-3xl animate-slowPulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-400/6 to-blue-400/8 rounded-full blur-3xl animate-slowPulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className={`w-full max-w-md transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Main Login Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-3xl"></div>

            <div className="relative z-10">
              {/* Logo and Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-xl animate-float">
                  <span className="text-white text-2xl font-bold">IE</span>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                  Welcome Back
                </h1>
                <p className="text-slate-600">Sign in to your IPO Edge account</p>
              </div>

              {/* Login Form */}
              <Form
                form={form}
                name="login"
                onFinish={onFinish}
                layout="vertical"
                requiredMark={false}
                className="space-y-4"
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="text-gray-400" />}
                    placeholder="Email address"
                    size="large"
                    className="rounded-xl border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="text-gray-400" />}
                    placeholder="Password"
                    size="large"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    className="rounded-xl border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                  />
                </Form.Item>

                <div className="flex items-center justify-between">
                  <Form.Item name="remember" valuePropName="checked" className="mb-0">
                    <Checkbox className="text-gray-600">Remember me</Checkbox>
                  </Form.Item>
                  <Link
                    to="/forgot-password"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300 text-sm font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Form.Item className="mb-6">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </Form.Item>
              </Form>

              {/* Social Login */}
              <div className="space-y-4">
                <Divider className="text-gray-400 text-sm">Or continue with</Divider>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={() => handleSocialLogin('Google')}
                    className="h-12 rounded-xl border-0 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-gray-700 font-medium"
                    style={{
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button
                    onClick={() => handleSocialLogin('Apple')}
                    className="h-12 rounded-xl border-0 bg-black hover:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-white font-medium"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Apple
                  </Button>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-8">
                <span className="text-gray-600">Don't have an account? </span>
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

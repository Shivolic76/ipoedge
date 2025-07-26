import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Divider, message, Progress } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  PhoneOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

// Simple animation data for success checkmark
const successAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Success",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Check",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [50, 50, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0, 0, 100] }, { t: 30, s: [100, 100, 100] }], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-10, 0], [-2, 8], [10, -8]],
                  c: false
                },
                ix: 2
              }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.133, 0.773, 0.369, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 4, ix: 5 },
              lc: 2,
              lj: 2
            }
          ]
        }
      ],
      ip: 0,
      op: 60,
      st: 0
    }
  ]
};



interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

interface PasswordStrength {
  score: number;
  feedback: string[];
  color: string;
}

const RegisterPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({ score: 0, feedback: [], color: '#ff4d4f' });
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const calculatePasswordStrength = (password: string): PasswordStrength => {
    let score = 0;
    const feedback: string[] = [];

    if (password.length >= 8) {
      score += 25;
    } else {
      feedback.push('At least 8 characters');
    }

    if (/[A-Z]/.test(password)) {
      score += 25;
    } else {
      feedback.push('One uppercase letter');
    }

    if (/[a-z]/.test(password)) {
      score += 25;
    } else {
      feedback.push('One lowercase letter');
    }

    if (/[0-9]/.test(password)) {
      score += 25;
    } else {
      feedback.push('One number');
    }

    let color = '#ff4d4f';
    if (score >= 75) color = '#52c41a';
    else if (score >= 50) color = '#faad14';
    else if (score >= 25) color = '#fa8c16';

    return { score, feedback, color };
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPasswordStrength(calculatePasswordStrength(password));
  };

  const onFinish = async (_values: RegisterFormData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(1);
      setTimeout(() => {
        message.success('Registration successful!');
        navigate('/login');
      }, 2000);
    } catch (error) {
      message.error('Registration failed. Please try again.');
      setLoading(false);
    }
  };

  const handleSocialRegister = (provider: string) => {
    message.info(`${provider} registration coming soon!`);
  };

  if (currentStep === 1) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6">
            <Lottie animationData={successAnimation} loop={false} />
          </div>
          <h1 className="text-3xl font-bold text-green-600 mb-4">Registration Successful!</h1>
          <p className="text-gray-600 mb-6">Welcome to IPO Edge. Redirecting to login...</p>
          <div className="w-64 mx-auto">
            <Progress percent={100} strokeColor="#52c41a" showInfo={false} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Professional Financial Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50"></div>

      {/* Financial Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Stock Chart Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* CSS Stock Chart Lines */}
        <svg className="absolute top-16 right-20 w-56 h-28 opacity-10" viewBox="0 0 180 70">
          <polyline
            fill="none"
            stroke="rgb(139, 92, 246)"
            strokeWidth="2"
            points="0,55 18,42 36,48 54,28 72,33 90,18 108,23 126,13 144,18 162,8 180,13"
            className="animate-pulse"
          />
        </svg>

        <svg className="absolute bottom-28 left-16 w-52 h-26 opacity-8" viewBox="0 0 160 65">
          <polyline
            fill="none"
            stroke="rgb(168, 85, 247)"
            strokeWidth="2"
            points="0,48 16,38 32,43 48,23 64,28 80,13 96,18 112,8 128,13 144,3 160,8"
            className="animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
        </svg>

        {/* Financial Data Cards */}
        <div className="absolute top-1/3 left-20 bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-lg p-3 shadow-lg animate-gentleFloat" style={{ animationDelay: '1s' }}>
          <div className="text-purple-600/40 text-xs font-mono">SENSEX</div>
          <div className="text-green-600/50 text-sm font-bold">+0.89%</div>
        </div>

        <div className="absolute bottom-1/4 right-24 bg-white/5 backdrop-blur-sm border border-violet-200/20 rounded-lg p-3 shadow-lg animate-gentleFloat" style={{ animationDelay: '3s' }}>
          <div className="text-violet-600/40 text-xs font-mono">BANKEX</div>
          <div className="text-green-600/50 text-sm font-bold">+3.45%</div>
        </div>

        {/* Candlestick Chart Elements */}
        <div className="absolute top-2/3 right-1/3 flex space-x-1 opacity-10">
          <div className="w-1 h-6 bg-purple-500 rounded-sm animate-pulse"></div>
          <div className="w-1 h-8 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-1 h-5 bg-red-500 rounded-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="w-1 h-9 bg-purple-500 rounded-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="w-1 h-7 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Subtle Background Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/8 to-violet-400/5 rounded-full blur-3xl animate-slowPulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-violet-400/6 to-purple-400/8 rounded-full blur-3xl animate-slowPulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className={`w-full max-w-lg transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Main Register Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-3xl"></div>

            <div className="relative z-10">
              {/* Logo and Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl mb-4 shadow-xl animate-float">
                  <span className="text-white text-2xl font-bold">IE</span>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                  Join IPO Edge
                </h1>
                <p className="text-slate-600">Create your account and start investing</p>
              </div>

              {/* Register Form */}
              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                layout="vertical"
                requiredMark={false}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <Form.Item
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                  >
                    <Input
                      prefix={<UserOutlined className="text-gray-400" />}
                      placeholder="First name"
                      size="large"
                      className="rounded-xl border-gray-200 hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                    />
                  </Form.Item>

                  <Form.Item
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                  >
                    <Input
                      prefix={<UserOutlined className="text-gray-400" />}
                      placeholder="Last name"
                      size="large"
                      className="rounded-xl border-gray-200 hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                    />
                  </Form.Item>
                </div>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="text-gray-400" />}
                    placeholder="Email address"
                    size="large"
                    className="rounded-xl border-gray-200 hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: 'Please input your phone number!' },
                    { pattern: /^[0-9+\-\s()]+$/, message: 'Please enter a valid phone number!' }
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined className="text-gray-400" />}
                    placeholder="Phone number"
                    size="large"
                    className="rounded-xl border-gray-200 hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                    { min: 8, message: 'Password must be at least 8 characters!' }
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="text-gray-400" />}
                    placeholder="Password"
                    size="large"
                    onChange={onPasswordChange}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    className="rounded-xl border-gray-200 hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                  />
                </Form.Item>

                {/* Password Strength Indicator */}
                {form.getFieldValue('password') && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Password strength</span>
                      <span className="text-sm font-medium" style={{ color: passwordStrength.color }}>
                        {passwordStrength.score >= 75 ? 'Strong' :
                         passwordStrength.score >= 50 ? 'Medium' :
                         passwordStrength.score >= 25 ? 'Weak' : 'Very Weak'}
                      </span>
                    </div>
                    <Progress
                      percent={passwordStrength.score}
                      strokeColor={passwordStrength.color}
                      showInfo={false}
                      size="small"
                    />
                    {passwordStrength.feedback.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {passwordStrength.feedback.map((item, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-500">
                            <CloseCircleOutlined className="mr-1 text-red-400" />
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <Form.Item
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: 'Please confirm your password!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="text-gray-400" />}
                    placeholder="Confirm password"
                    size="large"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    className="rounded-xl border-gray-200 hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                  />
                </Form.Item>

                <Form.Item
                  name="terms"
                  valuePropName="checked"
                  rules={[{ required: true, message: 'Please accept the terms and conditions!' }]}
                >
                  <Checkbox className="text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-purple-600 hover:text-purple-700">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-purple-600 hover:text-purple-700">
                      Privacy Policy
                    </Link>
                  </Checkbox>
                </Form.Item>

                <Form.Item className="mb-6">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 border-none hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </Form.Item>
              </Form>

              {/* Social Register */}
              <div className="space-y-4">
                <Divider className="text-gray-400 text-sm">Or register with</Divider>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={() => handleSocialRegister('Google')}
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
                    onClick={() => handleSocialRegister('Apple')}
                    className="h-12 rounded-xl border-0 bg-black hover:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-white font-medium"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Apple
                  </Button>
                </div>
              </div>

              {/* Sign In Link */}
              <div className="text-center mt-8">
                <span className="text-gray-600">Already have an account? </span>
                <Link
                  to="/login"
                  className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

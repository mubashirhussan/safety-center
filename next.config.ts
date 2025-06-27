import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'marvel-b1-cdn.bc0a.com', // Administration image
      'images.newscientist.com', // Quantum Dynamics image
      'encrypted-tbn0.gstatic.com', // Theory, Quantum Many Body, Engineered Quantum
      'www.ipm.fraunhofer.de', // Laser Spectroscopy
      'www.bsu.edu', // Administration (alternative domain)
      'physics.bu.edu', // Attosecond (from your previous data)
      'createeducation.com', // From your previous data
      'info.liquidinstruments.com', // From your previous data
      'mtu.edu', // From your previous data
      'www.mtu.edu', // From your previous data
    ],
  },
};

export default nextConfig;

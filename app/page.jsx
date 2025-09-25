import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='pt-36'>
        <section className='py-20 text-center'>
          <div className='max-w-4xl mx-auto px-6'>
            <h2 className='font-bold text-5xl '>The Future of</h2>
            <span className='font-bold text-5xl'>Image Creation</span>
            <p className='text-xl text-gray-300 mb-8'>
              Harness the power of quantum AI to transform your visual imagination into stunning reality. Welcome to the next dimension of creative expression.
            </p>
            <Link href='/dashboard'>
              <Button variant="primary" size="xl">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
    </div>
  )
}

export default page
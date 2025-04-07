import React from 'react'
import { Button, Text } from '@tarojs/components'
import classnames from 'classnames'
import './btn.scss'

interface ButtonProps {
  type?: 'primary' | 'secondary'
  size?: 'large' | 'small'
  onClick?: () => void
  title: string
}

const Btn: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'large',
  title,
  onClick
}) => {
  const classes = classnames('button rounded-md', {
    'button-primary': type === 'primary',
    'button-secondary': type === 'secondary',
    'button-large': size === 'large',
    'button-small': size === 'small',
  })

  return (
    <Button className={classes} onClick={onClick}>
      <Text className='text-lg'>{title}</Text>
    </Button>
  )
}

export default Btn

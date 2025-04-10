import React from 'react'
import { Button, Text } from '@tarojs/components'
import classnames from 'classnames'
import './btn.scss'

interface ButtonProps {
  type?: 'primary' | 'secondary'
  size?: 'large' | 'small'
  onClick?: () => void
  title: string
  disabled?: boolean
  block?: boolean
}

const Btn: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'large',
  title,
  onClick,
  disabled = false,
  block = false
}) => {
  const classes = classnames('btn', {
    'btn-primary': type === 'primary',
    'btn-secondary': type === 'secondary',
    'btn-large': size === 'large',
    'btn-small': size === 'small',
    'btn-block': block,
    'btn-disabled': disabled
  })

  return (
    <Button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      <Text className="btn-text">{title}</Text>
    </Button>
  )
}

export default Btn

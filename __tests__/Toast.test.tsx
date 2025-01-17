import { act, render, screen } from '@testing-library/react'
import { toast } from 'react-toastify'
import Toast from '../src/component/Toast'
import { useTranslation } from 'react-i18next'
import React from 'react'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}))

describe('Toast', () => {
  it('test_delete_toast', async () => {
    render(<Toast />)
    const { t } = useTranslation()
    act(() => {
      toast.success(t('toast.delete-success'))
    })

    expect(await screen.findByText(t('toast.delete-success'))).toBeInTheDocument()
  })

  it('test_toast_notification_limit', async () => {
    render(<Toast />)
    act(() => {
      toast.success('First notification')
      toast.success('Second notification')
      toast.success('Third notification')
    })
    const toasts = await screen.findAllByRole('alert')
    expect(toasts).toHaveLength(1)
  })
})

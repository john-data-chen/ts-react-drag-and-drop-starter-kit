import Toast from '../src/component/Toast'
import { act, render, screen } from '@testing-library/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

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

    expect(
      await screen.findByText(t('toast.delete-success'))
    ).toBeInTheDocument()
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

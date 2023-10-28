import { Button, Card, Input, Select, Typography } from 'antd';
import { useFormik } from 'formik';
import { RegisterForm as RegisterFormProps } from '../../types';
import { initialValues, validationSchema } from './registerFormSchema'

interface Props {
    onSubmit: (values: RegisterFormProps) => void
}

const RegisterForm = ({onSubmit} : Props) => {
    
    const handleSubmit = (values: RegisterFormProps) => {
        onSubmit(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return(
        <Card title={'Register Page'} style={{width: 350}}>
            <form onSubmit={formMik.handleSubmit}>
            <div>
                    <Typography.Paragraph>{'Email'}</Typography.Paragraph>
                    <Input name='email'
                        value={formMik.values.email}
                        onChange={formMik.handleChange('email')}
                        status={formMik.errors.email && 'error'}
                        placeholder='Enter Email' />
                    {formMik.errors.email && (
                        <Typography.Paragraph>{formMik.errors.email}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Username'}</Typography.Paragraph>
                    <Input name='username'
                        value={formMik.values.username}
                        onChange={formMik.handleChange('username')}
                        status={formMik.errors.username && 'error'}
                        placeholder='Enter Username' />
                    {formMik.errors.username && (
                        <Typography.Paragraph>{formMik.errors.username}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Password'}</Typography.Paragraph>
                    <Input name='Password'
                        value={formMik.values.password}
                        onChange={formMik.handleChange('password')}
                        status={formMik.errors.password && 'error'}
                        type='password'
                        placeholder='Enter Password' />
                    {formMik.errors.password && (
                        <Typography.Paragraph>{formMik.errors.password}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Role'}</Typography.Paragraph>
                    <Select
                            onChange={formMik.handleChange('role')}
                            status={formMik.errors.role && 'error'}
                            placeholder={'Select Role'}
                            style={{width: 200}}>
                            <Select.Option value='user'>User</Select.Option>
                            <Select.Option value='admin'>Admin</Select.Option>
                        </Select>
                    {formMik.errors.role && (
                        <Typography.Paragraph>{formMik.errors.role}</Typography.Paragraph>
                    )}
                </div>
                <Button type='primary' htmlType='submit'>Register</Button>
            </form>
        </Card>
    )
}

export default RegisterForm